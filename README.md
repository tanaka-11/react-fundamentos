# Fundamentos de React

## Branch: 12-gerenciamento-de-efeitos-colaterais

`Efeitos Colaterais` no React são operações que não tem ligação direta com a renderização do componente, como por exemplo, solicitações de API's e manipulação de eventos.

Usamos o **hook** `useEffect` para garantir que esses efeitos colaterais ocorram no momento adequado do clico de vida do componente, evitando execuções repetitivas e problemas de carregamento e desempenho.

### Array de Dependências

- Array Vazio []: O efeito será executado apenas uma vez após a montagem do componente.

- Array Com Elementos [elemento]: O efeito será executado quando os elementos mudarem.
