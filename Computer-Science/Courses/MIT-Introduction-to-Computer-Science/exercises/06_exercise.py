from swampy.TurtleWorld import *
import math

"""
turtle steering commands

fd => forward
bk => backward
lt => left
rt => right

pd => pen down
pu => pen up
"""

def polygon(length, sides, turtle, angle):
    for i in range(sides):
        fd(turtle, length)
        rt(turtle, angle / sides)

def regular_polygon(length, sides, turtle):
    polygon(length, sides, turtle, 360)

def square(length, turtle):
    polygon(length, 4, turtle, 360)

def circle(turtle, radius):
    circumference = 2*math.pi*radius
    length = circumference / 360
    polygon(length, 360, turtle, 360)

def arc(turtle, radius, angle):
    arc_length = radius*math.radians(angle)
    n = int(arc_length / 3) + 1
    step_length = arc_length / n
    step_angle = float(angle) / n
    for i in range(n):
        fd(turtle, step_length)
        rt(turtle, step_angle)

world = TurtleWorld()
bob = Turtle()
bob.delay = 0.01

john = Turtle()
john.delay = 0.01

circle(bob, 100)

wait_for_user()