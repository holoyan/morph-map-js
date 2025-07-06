import { morphMap } from './morph_map.js'

export function MorphMap(param: string) {
  return function <T extends { new (...args: any[]): {} }>(target: T) {
    morphMap.set(param, target)

    target.prototype.__morphMapName = param
  }
}

export function getClassPath<T extends { new (...args: any[]): {} }>(clazz: T): string {
  const morphMapName = clazz.prototype.__morphMapName
  if (!morphMapName) {
    throw new Error('morph map name not specified')
  }

  return morphMapName
}
