class Pagination:
    def __init__(self, items=[], pageSize=10) -> None:
        self.items = items
        self.pageSize = int(pageSize)
        self.current_page = 0
        self.out = []

    def Paginate(self):
        self.out = [self.items[i:i+self.pageSize] for i in range(0,len(self.items), self.pageSize)]
        return self.out

    def getVisibleItems(self):
        out = self.out[self.current_page]
        return out

    def firstPage(self):
        return self.out[0]

    def lastPage(self):
        return self.out[-1]

    def nextPage(self):
        if self.current_page + 1 < len(self.out):
            self.current_page += 1
        else:
            print('this is the last page')

    def prevPage(self):
        if self.current_page - 1 > 0:
            self.current_page -= 1
        else:
            print('this is the first page')

    def goToPage(self, num:int):
        if num > len(self.out):
            print("page doesn't exist, please try a lower number")
        else:
            self.current_page = num-1

list1 = ['a', 'b' ,'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']


alphabetList = "abcdefghijklmnopqrstuvwxyz"

letters_list = [char for char in alphabetList]


pagin = Pagination(letters_list, 4)

pagin.Paginate()

print(pagin.getVisibleItems())

pagin.goToPage(2)

print(pagin.getVisibleItems())

