import { verify } from "jsonwebtoken";

/*
Typescript interface to define the shape of currentUser object
*/
interface ICurrentUser {
  userId: string | null;
  isAuthenticated: boolean;
}

/*
getCurrentUserFromAuthorizationHeader function returns information about
the user currently making the request
*/

const getCurrentUserFromAuthorizationHeader = async (
  authorizationHeader: string | undefined
) => {
  let currentUser: ICurrentUser = {
    userId: null,
    isAuthenticated: false,
  };

  try {
    /*
    The authorization header must contain token in the format 'Bearer token'
    */
    if (
      !authorizationHeader ||
      !authorizationHeader.startsWith("Bearer ") ||
      authorizationHeader.split("Bearer ")[1].length === 0
    ) {
      return currentUser;
    }

    const extractedToken = authorizationHeader.split("Bearer ")[1];

    /*
    verify function takes in the jwt token, secret key(if any) which was used to sign the token
    and a callback function which accepts the error(if any errors occured while verifying the token)
    and result(verifiedToken)
    */
    verify(
      extractedToken,
      process.env.JWT_ACCESS_TOKEN_SECRET as any,
      (error: any, verifiedToken: any) => {
        if (error) {
          return currentUser;
        } else {
          currentUser.userId = verifiedToken.userId;
          currentUser.isAuthenticated = true;
        }
      }
    );

    return currentUser;
  } catch (error) {
    return currentUser;
  }
};

export { getCurrentUserFromAuthorizationHeader, ICurrentUser };
