const a = NaN;

const b = NaN;

const foo = a || 'default string';

const foo1 = b ?? 'default string';

console.log(`com || ${foo}`);

console.log(`com ?? ${foo1}`);

// Entretanto, devido ao || ser um operador lógico booleano, o operando do lado 
// esquerdo é coagido para um valor booleano para sua avaliação e qualquer valor falseável 
// (0, '', NaN, null, undefined) não é retornado. Este comportamento pode causar consequencias 
// inesperadas se você considerar 0, '', ou NaN como valores válidos.

// null || undefined ?? "foo"; // Dispara um SyntaxError
// true || undefined ?? "foo"; // Dispara um SyntaxError
// Entretanto, explicitar diretamente a precedência por meio de parênteses resulta no comportamento correto:
// (null || undefined) ?? "foo"; // retorna "foo"
