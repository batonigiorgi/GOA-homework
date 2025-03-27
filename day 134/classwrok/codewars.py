def comfortable_word(word):
    left_hand = set("qwertasdfgzxcvb")
    right_hand = set("yuiophjklmn")
    

    prev_hand = None

    for letter in word:

        if letter in left_hand:
            current_hand = "left"
        elif letter in right_hand:
            current_hand = "right"
        
        if prev_hand == current_hand:
            return False
        
        prev_hand = current_hand

    return True