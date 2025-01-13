def match(usefulness, months):
    needs = 100 * (0.85 ** months)  
    total_usefulness = sum(usefulness)  
    return "Match!" if total_usefulness >= needs else "No match!"  
