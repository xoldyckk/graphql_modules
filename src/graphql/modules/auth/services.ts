import { Injectable } from "graphql-modules";
import { sign } from "jsonwebtoken";

export interface ITokenPayload {
  userId: string;
}

/*
Injectable decorator makes the correponding provider/service(TokenService here)
injectable into the context object and other providers/services
*/
@Injectable()
export class TokenService {
  async createAccessToken(payload: ITokenPayload) {
    return sign(payload, process.env.JWT_ACCESS_TOKEN_SECRET as string, {
      expiresIn: "7 days",
    });
  }

  async createRefreshToken(payload: ITokenPayload) {
    return sign(payload, process.env.JWT_REFRESH_TOKEN_SECRET as string, {
      expiresIn: "7 days",
    });
  }
}
