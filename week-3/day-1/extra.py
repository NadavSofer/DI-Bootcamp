# gold Exercise 1 : Geometry -------------------------------------

class Circle:
    def __init__(self, radius=1.0) -> None:
        self.radius = radius
    
    def perimeter(self):
        pi = 3.14
        out = 2 * pi * self.radius
        return out
    

    def area(self):
        pi = 3.14
        out = pi * self.radius * self.radius
        return out

circle1 = Circle(5)


print(circle1.perimeter())
print(circle1.area())




# Exercise 2 : Custom List Class -----------------------------


class MyList:
    def __init__(self,list:list) -> None:
        self.list = list


    def reverse(self):
        self.list.reverse()
        return self.list
    
    def sort(self):
        self.list.sort()
        return self.list



list1 = MyList(['z','a','i','n','g'])

print(list1.reverse())
print(list1.sort())











# ninja --------------------------------------------------

# class Phone:
#     def __init__(self, phone_number) -> None:
#         self.phone_number = phone_number
#         self.call_history = []


#     def call(self, other_phone):
