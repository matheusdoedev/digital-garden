"""
Assume that we execute the following assignment statements
"""

width = 17
height = 12.0
delimiter = ',.,'

# For each of the following expressions, write the value of the expression and the type (of the value of the expression)

print(str(width / 2) + ' -> type is ' + str(type(width / 2)))
print(str(width / 2.0) + ' -> type is ' + str(type(width / 2.0)))
print(str(height / 3) + ' -> type is ' + str(type(height / 3)))
print(str(1 + 2 * 5) + ' -> type is ' + str(type(1 + 2 * 5)))
print(str(delimiter * 5) + ' -> type is ' + str(type(delimiter * 5)))
