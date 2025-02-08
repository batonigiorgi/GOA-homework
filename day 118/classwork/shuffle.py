import random

def group_people(leaders, members):
    groups = {leader: [] for leader in leaders}
    random.shuffle(members)  

    leader_index = 0

    while members:
        person = members.pop()
        current_leader = leaders[leader_index]
        groups[current_leader].append(person)

        if len(groups[current_leader]) >= 2:
            leader_index = (leader_index + 1) % len(leaders)

    return groups
    
leaders = ["Kote Ximshiashvili", "Davit Adeishvili", "Data Popxadze", 
           "Gobron Witlauri", "Nata Kvantaliani", "Giorgi Shavadze"]

all_people = ['mate chikaidze', 'giga kochalidze', 'zuka qoridze', 
              'gio mindorashvili', 'rati chigogidze', 'ilia iremadze', 
              'davit mefarishvili', 'lasha giorgi azaladze', 'luka tatuashvili', 
              'giorgi shavadze', 'nika macharashvili', 'ilia dzindzibadze']

groups = group_people(leaders, all_people)

for leader, members in groups.items():
    group_members = [leader] + members 
    print(f"Leader: {leader} - Group: {', '.join(group_members)}")
