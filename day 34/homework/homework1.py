def find_short(s):
    list1 = s.split(" ")


    word_len = len(list1[0])
    for i in list1:
        if len(i) < word_len:
            word_len = len(i)
    
    # word_len = 3
    return word_len

print(find_short("bitcoin take over the world maybe who knows perhaps"))

#1 chven vqmnit funqciaa find_shorts da gadavemt mas arguments s anu strings
#2chven vqmnit lists saxelad list1 romelshic s.split(" ")s vwert es imas nishnavs rom misi titoeuli wevri unda davacalkeot
#3word_lenit = len(list[0]) amiit anu vigebt pirveli sttringis zomas 
#4 for lupi uvlis yvela sityvas list1shi  amowmebs zoas aris tu ara word_lenze naklebi
#4 tu ufro naklebia mashin word_leni updeitdeba da is sityva iwereba romelic naklebia
#5yvelaze mokle sityvis dabruneba
#6funqciis gatestva

s1 = "flamingo"
result1 = s1.split("o")
print(result1)

s2 = "kokakola"
result2 = s2.split("k")
print(result2)

s3 = "tajiketi"
result3 = s3.split("t")
print(result3)

s4 = "musolini"
result4 = s4.split("o")
print(result4)

s5 = "gitleri"
result5 = s5.split("i")
print(result5)

s6 = "kongos demokratiuli respublika"
result6 = s6.split("o")
print(result6)

s7 = "chad"
result7 = s7.split("c")
print(result7)

s8 = "moldova"
result8 = s8.split("o")
print(result8)

s9 = "kacurikaci"
result9 = s9.split("k")
print(result9)

s10 = "cccp"
result10 = s10.split("p")
print(result10)
