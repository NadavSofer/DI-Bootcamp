class Human:
    def __init__(self, id_number:str, name:str, age:int, priority:bool, blood_type:str) -> None:
        self.id_number = id_number
        self.name = name
        self.age = age
        self.priority = priority
        self.blood_type = blood_type


class Queue(Human):
    def __init__(self) -> None:
        self.humans = []

    def add_person(self, person: Human):
        if type(person) == Human:
            # if person.priority == True or person.age > 60:
            #     self.humans.insert(0, person)
            # else:
            self.humans.append(person)
        else:
            raise ValueError('thing')

    def remove_person(self):
        self.humans.remove(self.humans[0])

    def show_queue(self):
        shown_queue = []
        for person in self.humans:
            shown_queue.append(person.name)
        return shown_queue

    def find_in_queue(self, person):
        people_list = self.show_queue()
        person_index = people_list.index(person)
        return person_index + 1

    def swap(self, person1, person2):
        pass

    def get_next(self):
        if len(self.humans) > 0:
            next_person = self.humans.pop(0)
            return next_person.name
        else:
            return None

    def get_next_blood_type(self, blood_type):
        type_to_check = blood_type.upper()
        for human in self.humans:
            if human.blood_type == type_to_check:
                next_of_type = self.humans.pop(self.humans.index(human))
                return next_of_type.name

    def sort_by_age(self):
        self.humans.sort(key=lambda x: x.age, reverse = True)
        self.humans.sort(key=lambda x: x.priority, reverse=True)
        return self.humans


steve = Human('45556673', 'Steve', 65, False, 'O')
kate = Human('25544663', 'Kate', 32, True, 'A')
brain = Human('25544663', 'Brain', 16, True, 'AB')
josh = Human('25553685', 'Josh', 24, False, 'O')
cake = 'cake'

queue = Queue()

queue.add_person(steve)
queue.add_person(kate)
queue.add_person(brain)
queue.add_person(josh)
# queue.add_person(cake)

print(queue.show_queue())
queue.sort_by_age()
print(queue.show_queue())
print(queue.get_next_blood_type('o'))
print(queue.show_queue())