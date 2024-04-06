import {
  ConflictException, Inject,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../../user/entities/user.entity";
import { Repository } from "typeorm";
import { HashingService } from "../hashing/hashing.service";
import { SignUpDto } from "./dto/sign-up.dto";
import { SignInDto } from "./dto/sign-in.dto";
import { JwtService } from "@nestjs/jwt";
import jwtConfig from "../config/jwt.config";
import { ConfigType } from "@nestjs/config";
import { ActiveUserData } from "../interfaces/active-user-data.interface";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRep: Repository<User>,
    private readonly hashingService: HashingService,
    private readonly jwtService: JwtService,
    @Inject(jwtConfig.KEY)
    private readonly jwtConfiguration: ConfigType<typeof jwtConfig>,
  ) {
  }

  async signUp(signUpDto: SignUpDto) {
    try {
      const user = new User();
      user.email = signUpDto.email;
      user.password = await this.hashingService.hash(signUpDto.password);

      await this.userRep.save(user);
    } catch (err) {
      const errCode: string = "23505";

      if (err["code"] === errCode) {
        throw new ConflictException();
      }

      throw err;
    }
  }

  async signIn(objDto: SignInDto) {
    const user = await this.userRep.findOneBy({
      email: objDto.email,
    });

    if (!user) {
      throw new UnauthorizedException("User does not exists");
    }

    const isEqual = await this.hashingService.compare(
      objDto.password,
      user.password,
    );

    if (!isEqual) {
      throw new UnauthorizedException("Pass does not match");
    }

    const accessToken = await this.jwtService.signAsync(
      {
        sub: user.id,
        email: user.email,
      } as ActiveUserData,
      {
        audience: this.jwtConfiguration.audience,
        issuer: this.jwtConfiguration.issuer,
        secret: this.jwtConfiguration.secret,
        expiresIn: this.jwtConfiguration.accessTokenTtl,
      },
    );

    return {
      accessToken,
    };
  }

  private async signToken(user: User) {
  }
}
