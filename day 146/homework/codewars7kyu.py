def duplicate_encode(word):
    word = word.lower()
    return ''.join(['(' if word.count(c) == 1 else ')' for c in word])


def pipe_fix(nums):
    return list(range(nums[0], nums[-1] + 1))


def greet(language):
    db = {
        "english": "Welcome",
        "czech": "Vitejte",
        "danish": "Velkomst",
        "dutch": "Welkom",
        "estonian": "Tere tulemast",
        "finnish": "Tervetuloa",
        "flemish": "Welgekomen",
        "french": "Bienvenue",
        "german": "Willkommen",
        "irish": "Failte",
        "italian": "Benvenuto",
        "latvian": "Gaidits",
        "lithuanian": "Laukiamas",
        "polish": "Witamy",
        "spanish": "Bienvenido",
        "swedish": "Valkommen",
        "welsh": "Croeso"
    }
    return db[language] if language in db else "Welcome"
