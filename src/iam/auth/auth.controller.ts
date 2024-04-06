import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignUpDto } from "./dto/sign-up.dto";
import { SignInDto } from "./dto/sign-in.dto";
import { Auth } from "./decorators/auth.decorator";
import { AuthType } from "./enums/auth-type.enum";

@Auth(AuthType.None)
@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }

  @Post("sign-up")
  signUp(@Body() objDto: SignUpDto) {
    return this.authService.signUp(objDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post("sign-in")
  signIn(@Body() objDto: SignInDto): Promise<{ accessToken: string }> {
    return this.authService.signIn(objDto);
  }

  //TODO:  VERSION WITH SENDING TOKEN WITH COOKIE
  // import { Response } from "express";

  // @HttpCode(HttpStatus.OK)
  // @Post("sign-in")
  // async signIn(
  //   @Res({ passthrough: true }) response: Response,
  //   @Body() objDto: SignInDto,
  // ){
  //   const accessToken = await this.authService.signIn(objDto);
  //   response.cookie('accessToken', accessToken, {
  //     secure: true,
  //     httpOnly: true,
  //     sameSite: true
  //   });
  // }

  //TODO: END
}
