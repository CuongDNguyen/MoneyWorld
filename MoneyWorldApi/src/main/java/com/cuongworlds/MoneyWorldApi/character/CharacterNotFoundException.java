package com.cuongworlds.MoneyWorldApi.character;

public class CharacterNotFoundException extends RuntimeException {

    public CharacterNotFoundException(Long id) {
        super("Character id not found : " + id);
    }
}
