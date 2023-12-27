import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Niggas!';
  }

  itsWorking(): string {
    return "Its workingggg";
  }

  async getContributions(): Promise<any> {
    const body:Object = {
      "query": `query {
          user(login: "Eliezir") {
            name
            contributionsCollection {
              contributionCalendar {
                colors
                totalContributions
                weeks {
                  contributionDays {
                    color
                    contributionCount
                    date
                    weekday
                  }
                  firstDay
                }
              }
            }
          }
        }`
  }

  const params:Object = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer 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`
    },
    body: JSON.stringify(body),
  };
  
    const res = await fetch("https://api.github.com/graphql", params)
    
    return res.json();
  }

  async getContsByDay(): Promise<any> {
    const contributions: Object = await this.getContributions()
    const weeks = contributions["data"]["user"]["contributionsCollection"]["contributionCalendar"]["weeks"]

    //transformar em typescript
    const formatedWeeks = weeks.map((week, index) => (
      week["contributionDays"].map((day, index) => {
        return {
          "conts" : day.contributionCount,
          "date" : day.date
        }})
    ))

    return formatedWeeks;
  }
}
