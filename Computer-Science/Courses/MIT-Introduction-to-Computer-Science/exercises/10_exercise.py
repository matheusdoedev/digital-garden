def factorial(n):
    if not isinstance(n, int):
        print("Factorial is only defined for integers")
        return
    elif n < 0:
        print("Factorial is only defined for positive integers")
        return
    elif n == 0:
        return 1
    else:
        recurse = factorial(n-1)
        result = n * recurse
        return result

print(factorial(4))