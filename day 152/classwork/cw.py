
def invert_hash(dictionary):
    inverted = {}

    for key in dictionary:
        value = dictionary[key]  
        inverted[value] = key    

    return inverted



def age(x, y):
    brother_age = x / (y - 1)
    julie_age = brother_age + x
    return julie_age




def strong_enough(earthquake, age):
    magnitude = 1
    for shockwave in earthquake:
        shock_sum = sum(shockwave)
        magnitude *= shock_sum

    building_strength = 1000 * (0.99 ** age)

    if building_strength >= magnitude:
        return "Safe!"
    else:
        return "Needs Reinforcement!"