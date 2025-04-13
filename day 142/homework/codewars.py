def format_poem(poem):
    sentences = poem.split(". ")

    for i in range(len(sentences)):
        if not sentences[i].endswith("."):
            sentences[i] += "."

    return "\n".join(sentences)