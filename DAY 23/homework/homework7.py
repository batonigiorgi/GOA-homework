def longest_and_shortest_string(list):
    longest=max(list, key=len)
    shortest=min(list, key = len)
    return longest, shortest

print(longest_and_shortest_string(["giorgi","nuca","mindorashvili"]))