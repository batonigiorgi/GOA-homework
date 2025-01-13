#  1
def matrix_sum(matrix):
    result = 0
    for i in matrix:
        result += sum(i)
    return result

print(matrix_sum([[1, 3], [1, 4], [2, 2]]))

#  2
def reverse_matrix(matrix):
    ls = []
    for i in range(len(matrix[0])):
        ls.append([x[i] for x in matrix])
    return ls

print(reverse_matrix([[7, 3], [1, 4]]))

# 3
def matrix_diagonal(matrix):
    if len(matrix) != len(matrix[0]):
        return "2D array must be N x N"
    
    result1 = 0 
    result2 = 0 
    i = 0
    j = len(matrix[0]) - 1
    
    for x in matrix:
        result1 += x[i]
        result2 += x[j]
        i += 1
        j -= 1
    
    return result1, result2

print(matrix_diagonal([[1, 3], [1, 4]]))
