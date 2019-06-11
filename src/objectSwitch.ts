type val = number | string
interface Target {
    [propName: string]: any
}

export default function objectSwitch(
    value: val | string,
    target: Target,
    exec = false,
  ) {
    return target[value]
          ? ( exec ? target[value]() : target[value] )
          : ( target.default ? ( exec ? target.default() : target.default ) : null )
  }