# Word Game CLI

## User Story

> As a CLI user I want to play the word guessing game for a specific category.

## Acceptance Criteria

- When the application starts I should be presented with a list of choices to select from
  - Please select a category:
    - Movies (default)
    - Countries
    - Sports
- When I select a particular category then I should be presented with a random word from the selected categories list where the word is masked, i.e. the vowels are visible and the consonants are masked. For instance, if the random word for a category is `Toy Story` then the masked words will be `_o_  __o__`
- When the games starts I will be given 5 lives wherein an incorrect attempt results in the loss of 1 life. When my remaining lives reaches 0 then it is game over.
- After I am presented with the category to select and the masked word from the selected category is displayed then I will be presented with another question `Please enter a character:`.
- When I enter a character it will be checked against the random word and if the character is present then the masked word will reveal the character. For instance, if I guess `t` then the masked word will reveal as `To_ _to__`.
- When I enter a character it will be checked against the random word and if the character is not present then the remaining lives will be decremented by 1. For instance, if I guess `x` then the masked word will reveal as the previous state `To_ _to__` and my remaining incorrect attempts will be 9.

### Game Sequence

After I select a category and a random word is selected then I am presented with the following:

```
_o_ __o__

Health: ❤️❤️❤️❤️❤️
Characters guessed:
```

When I guess `t` then I am presented with the following:

```
To_ _to__

Health: ❤️❤️❤️❤️❤️
Characters guessed: t
```

When I guess `x` then I am presented with the following:

```
To_ _to__

Health: ❤️❤️❤️❤️
Characters guessed: t | x
```

When I guess `y` then I am presented with the following:

```
Toy _to_y

Health: ❤️❤️❤️❤️
Characters guessed: t | x | y
```

When I guess `r` then I am presented with the following:

```
Toy _tory

Health: ❤️❤️❤️❤️
Characters guessed: t | x | y | r
```

When I guess `s` then I am presented with the following:

```
Toy Story

Health: ❤️❤️❤️❤️
Characters guessed: t | x | y | s
YOU WIN!!
```

If I lost all my health then I am presented with the following:

```
Toy _tory

Health:
Characters guessed: t | x | y | a | b | c | d
YOU LOST!!
```

### NOTE

The code should pick a random word from the [categories.json](./unsolved/categories.json) file. Feel free to add more words to each category.
