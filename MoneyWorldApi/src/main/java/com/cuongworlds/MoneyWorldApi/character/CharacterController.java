package com.cuongworlds.MoneyWorldApi.character;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
public class CharacterController {

    @Autowired
    private CharacterRepository characterRepository;

    @CrossOrigin
    @GetMapping("/characters")
    List<Character> findAll() {
        return characterRepository.findAll();
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/characters")
    Character newCharacter(@RequestBody Character newCharacter) {
        return characterRepository.save(newCharacter);
    }

    @GetMapping("/characters/{id}")
    Character findOne(@PathVariable Long id) {
        return characterRepository.findById(id)
                .orElseThrow( () -> new CharacterNotFoundException(id));
    }

    @PutMapping("/characters/{id}")
    Character saveOrUpdate(@RequestBody Character newCharacter, @PathVariable Long id) {
        return characterRepository.findById(id)
                .map( zz -> {
                    zz.setName(newCharacter.getName());
                    zz.setSkill(newCharacter.getSkill());
                    zz.setMoney(newCharacter.getMoney());
                    return characterRepository.save(zz);
                }).orElseGet( () -> {
                    newCharacter.setId(id);
                    return characterRepository.save(newCharacter);
                });
    }

    @PatchMapping("/characters/{id}")
    Character patch(@RequestBody Map<String, String> update, @PathVariable Long id) {

        return characterRepository.findById(id)
                .map(zz -> {

                    String character = update.get("character");
                    if (!StringUtils.isEmpty(character)) {
                        zz.setName(character);
                        return characterRepository.save(zz);
                    } else {
                        throw new CharacterUnSupportedFieldPatchException(update.keySet());
                    }
                }).orElseGet( () -> {
                   throw new CharacterNotFoundException(id);
                });
    }

    @DeleteMapping("/characters/{id}")
    void deleteCharacter(@PathVariable Long id) {
        characterRepository.deleteById(id);
    }
}
