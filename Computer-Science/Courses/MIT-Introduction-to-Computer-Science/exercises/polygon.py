from swampy.TurtleWorld import *

"""
turtle steering commands

fd => forward
bk => backward
lt => left
rt => right

pd => pen down
pu => pen up
"""

def polygon(length, sides):
    for i in range(sides):
        fd(bob, length)
        rt(bob)

def square(length):
    polygon(length, 4)

def main():
    world = TurtleWorld()
    bob = Turtle()

    square(100)

    wait_for_user()

    
main()