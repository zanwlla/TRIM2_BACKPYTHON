from datetime import datetime

estacoes = {
    'Verão':  {'inicio': (21, 12), 'fim': (20, 3)},
    'Outono': {'inicio': (21, 3), 'fim': (20, 6)},
    'Inverno':{'inicio': (21, 6), 'fim': (22, 9)},
    'Primavera':{'inicio': (23, 9), 'fim': (20, 12)}
}

def get_estacao(data_nascimento):
    dia, mes = data_nascimento.day, data_nascimento.month
    for estacao, periodo in estacoes.items():
        inicio = datetime(datetime.now().year, periodo['inicio'][1], periodo['inicio'][0])
        fim = datetime(datetime.now().year, periodo['fim'][1], periodo['fim'][0])

        if inicio <= data_nascimento <= fim:
            return estacao
        if periodo['inicio'][1] > periodo['fim'][1] or (periodo['inicio'][1] == periodo['fim'][1] and periodo['inicio'][0] > periodo['fim'][0]):
            if data_nascimento >= inicio or data_nascimento <= fim:
                return estacao
    return "Data inválida"

data_nascimento_str = input("Informe sua data de nascimento (DD/MM): ")
data_nascimento = datetime.strptime(data_nascimento_str, "%d/%m")

estacao_aniversario = get_estacao(data_nascimento)
print(f"Você nasceu na estação: {estacao_aniversario}")
