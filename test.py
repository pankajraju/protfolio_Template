def leap_year(year):
    if (year%100==0 and year%400==0) or (year%4==0):
        print('leap year ')
    else:
        print('not leap year ')
    
    
year=int(input('enter a year'))
leap_year(year)

