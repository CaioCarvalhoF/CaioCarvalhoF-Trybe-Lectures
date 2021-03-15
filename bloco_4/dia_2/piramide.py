def construir_piramide(altura):
  espacos = altura
  tracos = 1
  while espacos > 0:
    #print(espacos*' ' + tracos*'-')
    for i in range(espacos):
      print(' ', end='')
    for i in range(tracos):
      print('-', end='')
    print()
    espacos = espacos - 1
    tracos = tracos + 2


print("Digite a altura da pirâmide:")
altura = int(input())
construir_piramide(altura)