import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app') //데커레이터를 사용하여 클래스를 컨트롤러로 만든다.
//컨트롤러 데커레이터의 인수로 라우팅 경로의 접두어를 지정할 수 있다. 보통 컨트롤러가 맡은 리소스의 이름을 지정한다.
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello') //라우팅 경로는 Get데커레이터의 인수로 관리한다 -2
  //@Get('/he*lo') 처럼 와일드카드 문자를 사용할 수 있다. => 컴포넌트 이름을 정하는데 사용한다는데?
  //Get 데커레이터를 가지고 있다. 루트 경로로 들어오는 요청을 처리할 수 있다 . -1
  getHello(@Req() req: Request): string {
    //클라이언트는 요청을 보내면서 종종 서버가 원하는 정보를 함께 전달한다.
    //Nest는 요청과 함께 전달되는 데이터를 핸들러(요청을 처리할 구성요소. 컨트롤러가 하는 역할)가 다룰 수 있는 객체로 변환한다.
    //이 객체는 @Req 데커레이터로 다룰 수 있다.
    //요청 객체를 직접 다루는 일은 거의 없다.
    //@Query, @Param, @Body 데커레이터를 사용하여 요청 객체의 특정 부분을 추출한다.

    return this.appService.getHello();
  }
}
