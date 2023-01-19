//리덕스 통합 관리
import { combineReducers } from 'redux';
import mbti from './modules/mbti';
import todo from './modules/todo'; //todo뒤에 js 즉 확장자 생략가능

export default combineReducers({
  //각 store들을 합쳐서 보내주기 위해 export 안에는 store들을 임포트
  todo,
  mbti,
});
