package md.webapp.taskoti.auth;

import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;

public class KeyGenerator {
    public static void main(String[] args) {
        try {
            KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance("EC");
            keyPairGenerator.initialize(256); // размер ключа

            KeyPair keyPair = keyPairGenerator.generateKeyPair();
            String privateKey = Base64.getEncoder().encodeToString(keyPair.getPrivate().getEncoded());
            String publicKey = Base64.getEncoder().encodeToString(keyPair.getPublic().getEncoded());

            System.out.println("Private Key: " + privateKey);
            System.out.println("Public Key: " + publicKey);
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
    }
}

