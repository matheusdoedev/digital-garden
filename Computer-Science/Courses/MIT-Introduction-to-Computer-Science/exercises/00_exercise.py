"""
If you run a 10 kilometer race in 43 minutes 30 seconds, what is your average time per mile? What is your average speed in miles per hour? (Hint: there are 1.61 kilometers in a mile).
"""

distanceInKilometers = 10

timeInMinutes = 43,5

timeInSeconds = (43 * 60) + 30;

distanceInMiles = distanceInKilometers * 1.61

averageTimePerMile = timeInSeconds / distanceInMiles

averageSpeed = distanceInMiles / (timeInSeconds / 3600)

print(str(averageTimePerMile) + ' s/mi')

print(str(averageSpeed) + ' mi/h')

