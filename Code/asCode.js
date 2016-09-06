import flip from 'ramda/src/flip'
import map from 'ramda/src/map'
import compose from 'ramda/src/compose'
import times from 'ramda/src/times'
import asString from 'react-element-to-jsx-string'
import inspect from 'stringify-object'
import { Children } from 'react'

const opts = {
  showDefaultProps: false,
  showFunctions: true,
  useBooleanShorthandSyntax: true
}

const reFormatFunctionProp = (code) =>
  code.replace(
    /function ([a-zA-Z0-9]+)\((.*?)\) {\s*return ([\s\S]+?);\s*}}/g,
    '($2) => $3}'
  )

const stripUndefinedProps = (code) =>
  code.replace(/[a-zA-Z0-9]+={undefined}/g, '')

const stripEmptyLines = (code) =>
  code
    .split('\n')
    .filter((line) => line.trim() !== '')
    .join('\n')

const toSingleQuote = (code) =>
  code.replace(/"/g, "'")

const getIndentation = (string) =>
  string
    .split('')
    .reduce((result, char) =>
      result.skip
        ? result
        : (
          char === ' '
            ? { count: result.count + 1, skip: false }
            : { count: result.count, skip: true }
        )
      , { count: 0, skip: false }
    ).count

const reFormatObjectProps = (code) =>
  code
    .split('\n')
    .map((line) => {
      const matchObject = line.match(/{({.+?})}/)

      if (matchObject) {
        const obj = eval('(' + matchObject[1] + ')') // eslint-disable-line no-eval

        if (Object.keys(obj).length === 1) {
          return [line]
        }

        const lines = inspect(obj, { indent: '  ' }).split('\n')
        const baseIndentation = getIndentation(line)

        lines[0] = line.replace(/{{.+?}}.*/, '{{')
        lines[lines.length - 1] = '}}'

        if (line.trim().endsWith('/>')) {
          lines[lines.length - 1] = lines[lines.length - 1] + ' />'
        } else if (line.trim().endsWith('>')) {
          lines[lines.length - 1] = lines[lines.length - 1] + '>'
        }

        return lines
          .map(
            (l, index) => index > 0
              ? times(() => ' ', baseIndentation).join('') + l
              : l
          )
      }

      const matchArray = line.match(/{(\[.+?\])}/)
      if (matchArray) {
        try {
          const arr = eval('(' + matchArray[1] + ')') // eslint-disable-line no-eval
          const baseIndentation = getIndentation(line)

          const lines = inspect(arr, { indent: '  ' }).split('\n')
          lines[0] = line.replace(/{\[.+?\]}.*/, '{[')
          lines[lines.length - 1] = ']}'

          if (line.trim().endsWith('/>')) {
            lines[lines.length - 1] = lines[lines.length - 1] + ' />'
          } else if (line.trim().endsWith('>')) {
            lines[lines.length - 1] = lines[lines.length - 1] + '>'
          }

          return lines
            .map(
              (l, index) => index > 0
                ? times(() => ' ', baseIndentation).join('') + l
                : l
            )
        } catch (e) {
          return [line]
        }
      }

      return [line]
    })
    .reduce((a, b) => a.concat(b), [])
    .join('\n')

const postProcessing = compose(
  stripEmptyLines,
  stripUndefinedProps,
  reFormatFunctionProp,
  reFormatObjectProps,
  toSingleQuote
)

const asCode = (children) =>
  postProcessing(
    map(flip(asString)(opts), Children.toArray(children)).join('\n')
  )

export default asCode
