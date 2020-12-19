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
def polyline(length, n, turtle, angle):
    """
    Draw n lines segments with the given length and angle (in degrees) between them.
    """
    for i in range(n):
        fd(turtle, length)
        rt(turtle, angle)

def polygon(length, sides, turtle):
    """
    Draw a polygon regular using the polyline function with the given length, sides and the angle, that is 360 divide by the number of sides
    """
    angle = 360 / sides;
    polyline(length, sides, turtle, angle)

def square(length, turtle):
    polyline(length, 4, turtle, 360)

def arc(turtle, radius, angle):
    """
    Draw a arc with the given radius, angle and the polyline function. This function will calculate the n, step_length and step_angle to pass as argument on polyline.
    """
    arc_length = radius*math.radians(angle)
    n = int(arc_length / 3) + 1
    step_length = arc_length / n
    step_angle = float(angle) / n
    polyline(step_length, n, turtle, step_angle)

def circle(turtle, radius):
    """
    Draw a circle with given radius and using arc function 
    """
    print("drawing the circle...")
    arc(turtle, radius, 360)

world = TurtleWorld()
bob = Turtle()
bob.delay = 0.01

john = Turtle()
john.delay = 0.01

circle(bob, 50)

wait_for_user()