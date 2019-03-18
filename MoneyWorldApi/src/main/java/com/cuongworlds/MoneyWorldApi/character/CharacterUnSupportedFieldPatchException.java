package com.cuongworlds.MoneyWorldApi.character;

import java.util.Set;

public class CharacterUnSupportedFieldPatchException extends RuntimeException {

    public CharacterUnSupportedFieldPatchException(Set<String> keys) {
        super("Field " + keys.toString() + " update is not allowed.");
    }
}
