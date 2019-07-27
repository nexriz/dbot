{

 const resolveSymbol = (sym) => {
   return (this.context || {})[sym];
 }


 function UnaryRelationCases(a, b, token) {
  token = token instanceof Array ? token[0] : token
  switch(token) {
   case "=": return a == b
   case "!=": return a != b
   case "<":  return a < b
   case "<=": return a <= b
   case ">":  return a > b
   case ">=": return a >= b
   case "==": return a === b
  }

 }

  function LogicGateCases(a, b, token) {
  token = token instanceof Array ? token[0] : token
  switch(token) {
   case "&": return !!a && !!b
   case "AND": return !!a && !!b
   case "|":  return !!a || !!b
   case "OR": return !!a || !!b
   case "!|":  return !a && !!b || !!a && !b
   case "XOR": return !a && !!b || !!a && !b
  }

 }

function fromTodayBack({
  from = new Date(),
  year = 0,
  mounth = 0,
  day = 0,
  formated
} = {}) {
  let date = from;
  date = new Date(
    date.setHours(date.getHours() - date.getTimezoneOffset() / 60)
  );
  const setDate = () =>
    date.setFullYear(
      date.getFullYear() + year,
      date.getMonth() + mounth,
      date.getDate() + day,
      date.getHours()
    );
  return formated ? new Date(setDate()) : setDate();
}
function now() {
  return new Date().getTime();
}


function contextProvider() {

}
}



evalexpression 
  = logicgate


// evalcommand 
//   = 



start
  = logicgate


 mapvarstovalues
 = context_provider


context_provider
  = "{" vars:variables "}" { 
    console.log(text(), vars.join(""))
    return text()
   }


variables
 = variable binder:(dash variable)? {
  
  return 
 }
 / variable

variable 
  = [a-z] [0-9]? 


logicgate "Logic Gates"
  = left:condition gate:gates right:logicgate { return LogicGateCases(left, right, gate)}
  / condition

condition
  = left:additive comparision:comparision right:condition { return UnaryRelationCases(left, right, comparision)}
  / additive

additive
  = left:subtraction plus right:additive { return left + right }
  / subtraction

subtraction
  = left:multiplicative minus right:subtraction { return left - right }
  / multiplicative

multiplicative
  = left:division times right:multiplicative { return left * right }
  / division

division
  = left:exponentiation dividedby right:division { return left / right }
  / exponentiation

exponentiation
  = left:modulus power right:exponentiation { return left**right }
  / modulus

modulus
  = left:primary mod right:modulus { return left % right }
  / primary

primary
  = output:precedence      { return output }
  / output:math_function { return output }
  / output:date          { return output }
  / number

precedence
  = _ "(" result:logicgate ")" _ { return result }

math_function
  =  _ method:math_methods "(" _ args:args _ ")" _ { return Math[String(method)](...[].concat(args)) }

args
  = arg _ comma _ args { return text().split(",")}
  / arg

arg
  = additive:additive { return additive }

date 
  = _ "date(" param:param? ")" _ { return (new Date(param)).getTime() } 

param "Param for Date" 
    = string:string { return string.join("")}
    / int:int { return +int.join("")}

string "string" = quote _ chars:chars _ quote { return chars }

number "number"
  = _ zero:zero rest:number? _ { return rest ? rest : +zero }
  / _ $signed? int? decimal? exponent?_ { return parseFloat(text(), 10) }

zero
  = [0] 

plus
  = "+"

minus 
  = "-"

times
  = "*"

dividedby
  = "/"

power
  = ("^" / "**")

mod
  = ("mod" / "%")
  
digit
  = [1-9]

digits
  = [0-9]+

dot
  = "."

comma
  = [,]
e
  = [eE]

dash
  = "-"

exponent
  = e (minus / plus)? digits

int
  = zero / (digit digits?)

decimal
  = (dot digits)

signed
  = (minus / plus)


keyword
  = ("if" / "om")


_ "whitespace"
  = [ \t\n\r]*



comparision
    = "="
    / "!="
    / $"<" !"="
    / "<="
    / $">" !"="
    / ">="

gates
    = ("&" / "and"i / "och"i)
    / $"&" !"|"
    / "&&"
    / "|"
    / $"|" !"&"
    / "!|"




chars = [a-zA-Z0-9- ]*

name = [a-zA-Z0-9- ]*

math_methods
  = 'abs'
  / 'acos' 
  / 'acosh' 
  / 'asin' 
  / 'asinh' 
  / 'atan' 
  / 'atanh' 
  / 'atan2' 
  / 'ceil' 
  / 'cbrt' 
  / 'expm1' 
  / 'clz32' 
  / 'cos' 
  / 'cosh' 
  / 'exp' 
  / 'floor' 
  / 'fround' 
  / 'hypot' 
  / 'imul' 
  / 'log' 
  / 'log1p' 
  / 'log2' 
  / 'log10' 
  / 'max' 
  / 'min' 
  / 'pow' 
  / 'random' 
  / 'round' 
  / 'sign' 
  / 'sin' 
  / 'sinh' 
  / 'sqrt' 
  / 'tan' 
  / 'tanh' 
  / 'trunc' 
  / 'E' 
  / 'LN10' 
  / 'LN2' 
  / 'LOG10E' 
  / 'LOG2E' 
  / 'PI' 
  / 'SQRT1_2' 
  / 'SQRT2'


quote = '"' / "'"
