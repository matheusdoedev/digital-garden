import math

def hypotenuse(leg_a, leg_b):
    a_squared = leg_a**2
    b_squared = leg_b**2
    h = a_squared + b_squared
    return math.sqrt(h)

print(hypotenuse(3,4))

def is_between(x, y, z):
    if x<=y<=z:
        return True
    else:
        return False

print(is_between(3,4,5))