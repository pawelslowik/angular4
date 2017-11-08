package pl.com.psl.angular4.addressbook.controller.auth;

/**
 * Created by psl on 07.11.17
 */
class JWTConstants {

    static final String SECRET = "SecretKeyToGenJWTs";
    static final long EXPIRATION_TIME = 600_000;
    static final String TOKEN_PREFIX = "Bearer ";
    static final String HEADER_STRING = "Authorization";
}
