def longest_vowel(s):
    vowels = "aeiouAEIOU"
    max_count = 0
    current_count = 0
    
    for char in s:
        if char in vowels:
            current_count += 1
            if current_count > max_count:
                max_count = current_count
        else:
            current_count = 0
    
    return max_count

print(longest_vowel("laja"))   
print(longest_vowel("aaagio"))
 
