import { QuestionModel } from './models/QuestionModel.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {


  /**
  * @type {QuestionModel[]}
  */
  questions = []
}

export const AppState = createObservableProxy(new ObservableAppState())