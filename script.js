let pscode, errorList, currentLine, conditionStack;
const arcode = document.createElement("textarea");

function compile() {
    errorList = [];     //Lista de errores
    currentLine = 1;    //Línea actual
    conditionStack = [];    //Pila de condicionales
    arcode.value = "";      //Código de Arduino
    pscode = document.getElementById("code").value;     //Pseudocódigo
    

    pscode = pscode.split(/\r?\n/);
    pscode = pscode.join(" ~ ");
    pscode = pscode.split(" ");

    console.log(pscode);

    for (let i = 0; i < pscode.length; i++)
    {
        switch (pscode[i])
        {
            case "Inicio":
                if (i!=0)
                {
                    errorHandler(14, i);
                }
                break;
            case "Fin":
                break;
            case "":
                break;
            case " ":
                break;
            case "~":
                currentLine++
                break;
            case "Mover":
                if (pscode[i+1]=="Adelante" || pscode[i+1]=="Atrás" && pscode[i-1]=="~")
                {
                    arcode.value = arcode.value + "Mover_"
                } else
                {
                    if (pscode[i-1] != "~")
                    {
                        errorHandler(1, i);
                    }
                    if (pscode[i+1] == "~")
                    {
                        errorHandler(3, i);
                    } else
                    {
                        errorHandler(2, i);
                    }
                }
                break;
            case "Adelante":
                if (pscode[i+1]=="~" && pscode[i-1]=="Mover")
                {
                    arcode.value = arcode.value + "Adelante();\ndelay(1000);\n"
                } else
                {
                    if (pscode[i+1] != "~")
                    {
                        errorHandler(4, i);
                    }
                    if (pscode[i-1] == "~")
                    {
                        errorHandler(6, i);
                    } else
                    {
                        errorHandler(5, i);
                    }
                }
                break;
            case "Atrás":
                if (pscode[i+1]=="~" && pscode[i-1]=="Mover")
                {
                    arcode.value = arcode.value + "Atras();\ndelay(1000);\n"
                } else
                {
                    if (pscode[i+1] != "~")
                    {
                        errorHandler(4, i);
                    }
                    if (pscode[i-1] == "~")
                    {
                        errorHandler(6, i);
                    } else
                    {
                        errorHandler(5, i);
                    }
                }
                break;
            case "Girar":
                if (pscode[i+1]=="Derecha" || pscode[i+1]=="Izquierda" && pscode[i-1]=="~")
                {
                    arcode.value = arcode.value + "Girar_"
                } else
                {
                    if (pscode[i-1] != "~")
                    {
                        errorHandler(1, i);
                    }
                    if (pscode[i+1] == "~")
                    {
                        errorHandler(3, i);
                    } else
                    {
                        errorHandler(2, i);
                    }
                }
                break;
            case "Derecha":
                if (pscode[i+1]=="~" && pscode[i-1]=="Girar")
                {
                    arcode.value = arcode.value + "Derecha();\ndelay(1000);\n"
                } else
                {
                    if (pscode[i+1] != "~")
                    {
                        errorHandler(4, i);
                    }
                    if (pscode[i-1] == "~")
                    {
                        errorHandler(6, i);
                    } else
                    {
                        errorHandler(5, i);
                    }
                }
                break;
            case "Izquierda":
                if (pscode[i+1]=="~" && pscode[i-1]=="Girar")
                {
                    arcode.value = arcode.value + "Izquierda();\ndelay(1000);\n"
                } else
                {
                    if (pscode[i+1] != "~")
                    {
                        errorHandler(4, i);
                    }
                    if (pscode[i-1] == "~")
                    {
                        errorHandler(6, i);
                    } else
                    {
                        errorHandler(5, i);
                    }
                }
                break;
            case "Color":
                if (pscode[i+1]=="Rojo" || pscode[i+1]=="Azul" || pscode[i+1]=="Amarillo" || pscode[i+1]=="Verde" || pscode[i+1]=="Naranja" || pscode[i+1]=="Morado" || pscode[i+1]=="Blanco" || pscode[i+1]=="Aleatorio" || pscode[i+1]=="Negro" && pscode[i-1]=="~")
                {
                    arcode.value = arcode.value + "RGB_"
                } else
                {
                    if (pscode[i-1] != "~")
                    {
                        errorHandler(1, i);
                    }
                    if (pscode[i+1] == "~")
                    {
                        errorHandler(3, i);
                    } else
                    {
                        errorHandler(2, i);
                    }
                }
                break;
            case "Rojo":
                if (pscode[i+1]=="~" && pscode[i-1]=="Color")
                {
                    arcode.value = arcode.value + "Rojo();\ndelay(1000);\n"
                } else
                {
                    if (pscode[i+1] != "~")
                    {
                        errorHandler(4, i);
                    }
                    if (pscode[i-1] == "~")
                    {
                        errorHandler(6, i);
                    } else
                    {
                        errorHandler(5, i);
                    }
                }
                break;
            case "Azul":
                if (pscode[i+1]=="~" && pscode[i-1]=="Color")
                {
                    arcode.value = arcode.value + "Azul();\ndelay(1000);\n"
                } else
                {
                    if (pscode[i+1] != "~")
                    {
                        errorHandler(4, i);
                    }
                    if (pscode[i-1] == "~")
                    {
                        errorHandler(6, i);
                    } else
                    {
                        errorHandler(5, i);
                    }
                }
                break;
            case "Amarillo":
                if (pscode[i+1]=="~" && pscode[i-1]=="Color")
                {
                    arcode.value = arcode.value + "Amarillo();\ndelay(1000);\n"
                } else
                {
                    if (pscode[i+1] != "~")
                    {
                        errorHandler(4, i);
                    }
                    if (pscode[i-1] == "~")
                    {
                        errorHandler(6, i);
                    } else
                    {
                        errorHandler(5, i);
                    }
                }
                break;
            case "Verde":
                if (pscode[i+1]=="~" && pscode[i-1]=="Color")
                {
                    arcode.value = arcode.value + "Verde();\ndelay(1000);\n"
                } else
                {
                    if (pscode[i+1] != "~")
                    {
                        errorHandler(4, i);
                    }
                    if (pscode[i-1] == "~")
                    {
                        errorHandler(6, i);
                    } else
                    {
                        errorHandler(5, i);
                    }
                }
                break;
            case "Naranja":
                if (pscode[i+1]=="~" && pscode[i-1]=="Color")
                {
                    arcode.value = arcode.value + "Naranja();\ndelay(1000);\n"
                } else
                {
                    if (pscode[i+1] != "~")
                    {
                        errorHandler(4, i);
                    }
                    if (pscode[i-1] == "~")
                    {
                        errorHandler(6, i);
                    } else
                    {
                        errorHandler(5, i);
                    }
                }
                break;
            case "Morado":
                if (pscode[i+1]=="~" && pscode[i-1]=="Color")
                {
                    arcode.value = arcode.value + "Morado();\ndelay(1000);\n"
                } else
                {
                    if (pscode[i+1] != "~")
                    {
                        errorHandler(4, i);
                    }
                    if (pscode[i-1] == "~")
                    {
                        errorHandler(6, i);
                    } else
                    {
                        errorHandler(5, i);
                    }
                }
                break;
            case "Blanco":
                if (pscode[i+1]=="~" && pscode[i-1]=="Color")
                {
                    arcode.value = arcode.value + "Blanco();\ndelay(1000);\n"
                } else
                {
                    if (pscode[i+1] != "~")
                    {
                        errorHandler(4, i);
                    }
                    if (pscode[i-1] == "~")
                    {
                        errorHandler(6, i);
                    } else
                    {
                        errorHandler(5, i);
                    }
                }
                break;
            case "Aleatorio":
                if (pscode[i+1]=="~" && pscode[i-1]=="Color")
                {
                    arcode.value = arcode.value + "Aleatorio();\ndelay(1000);\n"
                } else
                {
                    if (pscode[i+1] != "~")
                    {
                        errorHandler(4, i);
                    }
                    if (pscode[i-1] == "~")
                    {
                        errorHandler(6, i);
                    } else
                    {
                        errorHandler(5, i);
                    }
                }
                break;
            case "Negro":
                if (pscode[i+1]=="~" && pscode[i-1]=="Color")
                {
                    arcode.value = arcode.value + "Apagar();\ndelay(1000);\n"
                } else
                {
                    if (pscode[i+1] != "~")
                    {
                        errorHandler(4, i);
                    }
                    if (pscode[i-1] == "~")
                    {
                        errorHandler(6, i);
                    } else
                    {
                        errorHandler(5, i);
                    }
                }
                break;
            case "LuzIzquierda":
                if (pscode[i+1]=="Prender" || pscode[i+1]=="Apagar" && pscode[i-1]=="~")
                {
                    arcode.value = arcode.value + "LedIzq_"
                } else
                {
                    if (pscode[i-1] != "~")
                    {
                        errorHandler(1, i);
                    }
                    if (pscode[i+1] == "~")
                    {
                        errorHandler(3, i);
                    } else
                    {
                        errorHandler(2, i);
                    }
                }
                break;
            case "LuzDerecha":
                if (pscode[i+1]=="Prender" || pscode[i+1]=="Apagar" && pscode[i-1]=="~")
                {
                    arcode.value = arcode.value + "LedDer_"
                } else
                {
                    if (pscode[i-1] != "~")
                    {
                        errorHandler(1, i);
                    }
                    if (pscode[i+1] == "~")
                    {
                        errorHandler(3, i);
                    } else
                    {
                        errorHandler(2, i);
                    }
                }
                break;
            case "Prender":
                if (pscode[i+1]=="~" && pscode[i-1]=="LuzIzquierda" || pscode[i-1]=="LuzDerecha")
                {
                    arcode.value = arcode.value + "Prender();\ndelay(1000);\n"
                } else
                {
                    if (pscode[i+1] != "~")
                    {
                        errorHandler(4, i);
                    }
                    if (pscode[i-1] == "~")
                    {
                        errorHandler(6, i);
                    } else
                    {
                        errorHandler(5, i);
                    }
                }
                break;
            case "Apagar":
                if (pscode[i+1]=="~" && pscode[i-1]=="LuzIzquierda" || pscode[i-1]=="LuzDerecha")
                {
                    arcode.value = arcode.value + "Apagar();\ndelay(1000);\n"
                } else
                {
                    if (pscode[i+1] != "~")
                    {
                        errorHandler(4, i);
                    }
                    if (pscode[i-1] == "~")
                    {
                        errorHandler(6, i);
                    } else
                    {
                        errorHandler(5, i);
                    }
                }
                break;
            case "Si":
                if (pscode[i-1]=="~" && (pscode[i+1]=="distancia" || !isNaN(pscode[i+1])) && (pscode[i+2]=="=" || pscode[i+2]==">" || pscode[i+2]=="<" || pscode[i+2]=="=<" || pscode[i+2]=="<=") && (pscode[i+3]=="distancia" || !isNaN(pscode[i+3])) && pscode[i+4]=="entonces")
                {
                    arcode.value = arcode.value + "if ("
                    conditionStack[conditionStack.length] = "FinSi";
                } else
                {
                    if (pscode[i-1] != "~")
                    {
                        errorHandler(1, i);
                    }
                    if (pscode[i+1] == "~")
                    {
                        errorHandler(3, i);
                    } else
                    {
                        errorHandler(8, i);
                    }
                }
                break;
            case "entonces":
                if (pscode[i+1]=="~" && (pscode[i-1]=="distancia" || !isNaN(pscode[i-1])) && (pscode[i-2]=="=" || pscode[i-2]==">" || pscode[i-2]=="<" || pscode[i-2]=="=<" || pscode[i-2]=="<=") && (pscode[i-3]=="distancia" || !isNaN(pscode[i-3])) && pscode[i-4]=="Si")
                {
                    arcode.value = arcode.value + ")\n{\n"
                } else
                {
                    if (pscode[i+1] != "~")
                    {
                        errorHandler(4, i);
                    }
                    if (pscode[i-1] == "~")
                    {
                        errorHandler(6, i);
                    } else
                    {
                        errorHandler(10, i);
                    }
                }
                break;
            case "distancia":
                    if (((pscode[i-1]=="Si" || pscode[i-1]=="Mientras") && (pscode[i+1]=="=" || pscode[i+1]==">" || pscode[i+1]=="<" || pscode[i+1]=="=<" || pscode[i+1]=="<=") && (pscode[i+2]=="distancia" || !isNaN(pscode[i+2])) && (pscode[i+3]=="entonces") || pscode[i+3]=="hacer") || ((pscode[i-3]=="Si" || pscode[i-3]=="Mientras") && (pscode[i-1]=="=" || pscode[i-1]==">" || pscode[i-1]=="<" || pscode[i-1]=="=<" || pscode[i-1]=="<=") && (pscode[i-2]=="distancia" || !isNaN(pscode[i-2])) && (pscode[i+1]=="entonces" || pscode[i+1]=="hacer")))
                    {
                        arcode.value = arcode.value + "distancia()"
                    } else
                    {
                        errorHandler(10, i);
                    }
                break;
            case "<":
                if ((pscode[i-2]=="Si" || pscode[i-2]=="Mientras") && (pscode[i-1]=="distancia" || !isNaN(pscode[i-1])) && (pscode[i+1]=="distancia" || !isNaN(pscode[i+1])) && (pscode[i+2]=="entonces" || pscode[i+2]=="hacer"))
                {
                    arcode.value = arcode.value + "<"
                } else
                {
                    errorHandler(10, i);
                }
                break;
            case ">":
                if ((pscode[i-2]=="Si" || pscode[i-2]=="Mientras") && (pscode[i-1]=="distancia" || !isNaN(pscode[i-1])) && (pscode[i+1]=="distancia" || !isNaN(pscode[i+1])) && (pscode[i+2]=="entonces" || pscode[i+2]=="hacer"))
                {
                    arcode.value = arcode.value + ">"
                } else
                {
                    errorHandler(10, i);
                }
                break;
            case "=":
                if ((pscode[i-2]=="Si" || pscode[i-2]=="Mientras") && (pscode[i-1]=="distancia" || !isNaN(pscode[i-1])) && (pscode[i+1]=="distancia" || !isNaN(pscode[i+1])) && (pscode[i+2]=="entonces" || pscode[i+2]=="hacer"))
                {
                    arcode.value = arcode.value + "="
                } else
                {
                    errorHandler(10, i);
                }
                break;
            case "<=":
                if ((pscode[i-2]=="Si" || pscode[i-2]=="Mientras") && (pscode[i-1]=="distancia" || !isNaN(pscode[i-1])) && (pscode[i+1]=="distancia" || !isNaN(pscode[i+1])) && (pscode[i+2]=="entonces" || pscode[i+2]=="hacer"))
                {
                    arcode.value = arcode.value + "<="
                } else
                {
                    errorHandler(10, i);
                }
                break;
            case ">=":
                if ((pscode[i-2]=="Si" || pscode[i-2]=="Mientras") && (pscode[i-1]=="distancia" || !isNaN(pscode[i-1])) && (pscode[i+1]=="distancia" || !isNaN(pscode[i+1])) && (pscode[i+2]=="entonces" || pscode[i+2]=="hacer"))
                {
                    arcode.value = arcode.value + ">="
                } else
                {
                    errorHandler(10, i);
                }
                break;
            case "Mientras":
                if (pscode[i-1]=="~" && (pscode[i+1]=="distancia" || !isNaN(pscode[i+1])) && (pscode[i+2]=="=" || pscode[i+2]==">" || pscode[i+2]=="<" || pscode[i+2]=="=<" || pscode[i+2]=="<=") && (pscode[i+3]=="distancia" || !isNaN(pscode[i+3])) && pscode[i+4]=="hacer")
                {
                    arcode.value = arcode.value + "while ("
                    conditionStack[conditionStack.length] = "FinMientras";
                } else
                {
                    if (pscode[i-1] != "~")
                    {
                        errorHandler(1, i);
                    }
                    if (pscode[i+1] == "~")
                    {
                        errorHandler(3, i);
                    } else
                    {
                        errorHandler(9, i);
                    }
                }
                break;
            case "hacer":
                if (pscode[i+1]=="~" && (pscode[i-1]=="distancia" || !isNaN(pscode[i-1])) && (pscode[i-2]=="=" || pscode[i-2]==">" || pscode[i-2]=="<" || pscode[i-2]=="=<" || pscode[i-2]=="<=") && (pscode[i-3]=="distancia" || !isNaN(pscode[i-3])) && pscode[i-4]=="Mientras")
                {
                    arcode.value = arcode.value + ")\n{\n"
                } else
                {
                    if (pscode[i+1] != "~")
                    {
                        errorHandler(4, i);
                    }
                    if (pscode[i-1] == "~")
                    {
                        errorHandler(6, i);
                    } else
                    {
                        errorHandler(10, i);
                    }
                }
                break;
            case "Repetir":
                if ((pscode[i+1]=="infinitas" || !isNaN(pscode[i+1])) && pscode[i-1]=="~")
                {
                    arcode.value = arcode.value + "for ("
                    conditionStack[conditionStack.length] = "FinRepetir";
                } else
                {
                    if (pscode[i-1] != "~")
                    {
                        errorHandler(1, i);
                    }
                    if (pscode[i+1] == "~")
                    {
                        errorHandler(3, i);
                    } else
                    {
                        errorHandler(9, i);
                    }
                }
                break;
            case "infinitas":
                if (pscode[i+1]=="veces" && pscode[i-1]=="Repetir")
                {
                    arcode.value = arcode.value + ";;)\n"
                } else
                {
                    errorHandler(10, i);
                }
                break;
            case "veces":
                if (pscode[i+1]=="~" && (pscode[i-1]=="infinitas" || !isNaN(pscode[i-1]))&& pscode[i-2]=="Repetir")
                {
                    arcode.value = arcode.value + "{\n"
                } else
                {
                    if (pscode[i+1] != "~")
                    {
                        errorHandler(4, i);
                    }
                    if (pscode[i-1] == "~")
                    {
                        errorHandler(6, i);
                    } else
                    {
                        errorHandler(10, i);
                    }
                }
                break;
            case "FinRepetir":
                if (conditionStack[conditionStack.length-1]=="FinRepetir")
                {
                    arcode.value = arcode.value + "}\n"
                    conditionStack.pop();
                } else
                {
                    if (conditionStack.length>0)
                    {
                        errorHandler(11, i);
                    } else
                    {
                        errorHandler(12, i);
                    }
                }
                break;
            case "FinSi":
                if (conditionStack[conditionStack.length-1]=="FinSi")
                {
                    arcode.value = arcode.value + "}\n"
                    conditionStack.pop();
                } else
                {
                    if (conditionStack.length>0)
                    {
                        errorHandler(11, i);
                    } else
                    {
                        errorHandler(12, i);
                    }
                }
                break;
            case "FinMientras":
                if (conditionStack[conditionStack.length-1]=="FinMientras")
                {
                    arcode.value = arcode.value + "}\n"
                    conditionStack.pop();
                } else
                {
                    if (conditionStack.length>0)
                    {
                        errorHandler(11, i);
                    } else
                    {
                        errorHandler(12, i);
                    }
                }
                break;
            default:
                if (isNaN(pscode[i]))
                {
                    errorHandler(7, i);  
                } else
                {
                    if (pscode[i-1]=="Repetir" && pscode[i+1]=="veces") {
                        arcode.value = arcode.value + "int i=0;i<"+pscode[i]+";i++)\n"
                    } else if (((pscode[i-1]=="Si" || pscode[i-1]=="Mientras") && (pscode[i+1]=="=" || pscode[i+1]==">" || pscode[i+1]=="<" || pscode[i+1]=="=<" || pscode[i+1]=="<=") && (pscode[i+2]=="distancia" || !isNaN(pscode[i+2])) && (pscode[i+3]=="entonces") || pscode[i+3]=="hacer") || ((pscode[i-3]=="Si" || pscode[i-3]=="Mientras") && (pscode[i-1]=="=" || pscode[i-1]==">" || pscode[i-1]=="<" || pscode[i-1]=="=<" || pscode[i-1]=="<=") && (pscode[i-2]=="distancia" || !isNaN(pscode[i-2])) && (pscode[i+1]=="entonces" || pscode[i+1]=="hacer")))
                    {
                        arcode.value = arcode.value + pscode[i]
                    } else {
                        errorHandler(13, i);
                    }
                }
                break;
        }
    }

    if (conditionStack.length>0)
    {
        for (let i=0; i<conditionStack.length; i++) {
            errorList[errorList.length] = "Faltó el cierre de condicional '"+conditionStack[conditionStack.length-1]+"'";
        }    
    }

    if (pscode[0] != "Inicio")
    {
        errorList[errorList.length] = "Se esperaba la palabra 'Inicio' al iniciar el código";
    }

    if (pscode[pscode.length-1] != "Fin")
    {
        errorList[errorList.length] = "Se esperaba la palabra 'Fin' al acabar el código";
    }

    if (errorList.length == 0)
    {
        console.log(arcode.value);
        alert("Su código ha sido compilado con éxito. El código de Arduino ha sido copiado al portapapeles");
        document.body.appendChild(arcode);
        arcode.select();
        document.execCommand("copy");
        document.body.removeChild(arcode);
        document.getElementById("errorsBox").innerHTML = "";
    } else
    {
        alert("Su código contiene errores");
        errorList = errorList.join("<br>");
        document.getElementById("errorsBox").innerHTML = "<h5 class='errorsText'>"+errorList+"</h5>";
    }

    console.log(conditionStack.length);
}



function errorHandler(type, currentSpace)
{
    switch (type)
    {
        case 1:
            errorList[errorList.length] = "Se ha detectado un error en la línea "+currentLine+": Se esperaba un salto de línea antes de la palabra '"+pscode[currentSpace]+"'";
            break;
        case 2:
            errorList[errorList.length] = "Se ha detectado un error en la línea "+currentLine+": La palabra '"+pscode[currentSpace+1]+"' no es un parámetro válido para la función '"+pscode[currentSpace]+"'";
            break;
        case 3:
            errorList[errorList.length] = "Se ha detectado un error en la línea "+currentLine+": No se esperaba un salto de línea después de la palabra '"+pscode[currentSpace]+"'";
            break;
        case 4:
            errorList[errorList.length] = "Se ha detectado un error en la línea "+currentLine+": Se esperaba un salto de línea después de la palabra '"+pscode[currentSpace]+"'";
            break;
        case 5:
            errorList[errorList.length] = "Se ha detectado un error en la línea "+currentLine+": La palabra '"+pscode[currentSpace-1]+"' no es una función compatible con el parámetro '"+pscode[currentSpace]+"'";
            break;
        case 6:
            errorList[errorList.length] = "Se ha detectado un error en la línea "+currentLine+": No se esperaba un salto de línea antes de la palabra '"+pscode[currentSpace]+"'";
            break;
        case 7:
            errorList[errorList.length] = "Se ha detectado un error en la línea "+currentLine+": La palabra '"+pscode[currentSpace]+"' es desconocida para el lenguaje";
            break;
        case 8:
            errorList[errorList.length] = "Se ha detectado un error en la línea "+currentLine+": La estructura del condicional 'Si' está incompleta o mal escrita";
            break;
        case 9:
            errorList[errorList.length] = "Se ha detectado un error en la línea "+currentLine+": La estructura del bucle '"+pscode[currentSpace]+"' está incompleta o mal escrita";
            break;
        case 10:
            errorList[errorList.length] = "Se ha detectado un error en la línea "+currentLine+": Uso incorrecto de la expresión '"+pscode[currentSpace]+"'";
            break;
        case 11:
            errorList[errorList.length] = "Se ha detectado un error en la línea "+currentLine+": Se esperaba el cierre de condicional '"+conditionStack[conditionStack.length-1]+"'";
            break;
        case 12:
            errorList[errorList.length] = "Se ha detectado un error en la línea "+currentLine+": No hay ningún condicional que cerrar";
            break;
        case 13:
            errorList[errorList.length] = "Se ha detectado un error en la línea "+currentLine+": No se esperaba un número";
            break;
        case 14:
            errorList[errorList.length] = "Se ha detectado un error en la línea "+currentLine+": La palabra 'Inicio' solo debe estar al iniciar el código";
            break;
        case 15:
            errorList[errorList.length] = "Se ha detectado un error en la línea "+currentLine+": La palabra 'Fin' solo debe estar al acabar el código";
            break;
        default:
            break;
    }
}