function getDateTimeByTimezone(timezone: string): number {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {
        timeZone: timezone,
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    const datePart = date.toLocaleString("en-US", options);
    return Date.parse(datePart);
  }
  
  function calculateAge(birthdate: Date, timezone: string) {
    let timeDiff = Math.abs(getDateTimeByTimezone(timezone) + 24 * 3600 * 1000 - birthdate.getTime());
    let age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    return age;
  }
  
  export function generateAgeBadgeSVG(
    textcolor_raw: any,
    birthdate_raw: any,
    fontsize_raw: any,
    fontfamily_raw: any,
    suffix: any,
    prefix: any,
    background_raw: any,
  ) : string{
    const fontsize = fontsize_raw == null ? 15 : parseInt(fontsize_raw);
    const age = calculateAge(new Date(birthdate_raw ?? ""), "America/New_York");
    const textcolor = "#" + textcolor_raw ?? "ffffff";
    const fontfamily =  fontfamily_raw ?? "Arial";
    const text = (suffix ?? "") + age + (prefix ?? "");
    const background = background_raw == null ? "transparent" : "#" + background_raw;
  
    console.log(background);

    return `
      <svg xmlns="http://www.w3.org/2000/svg" width="${(fontsize /2) * text.length + 20}" height="${fontsize *2 + 5}">
        <rect width="100%" height="100%" fill="${background}"/>
        <text x="0%" y="10%" fill="${textcolor}" font-size="${fontsize}" font-family="${fontfamily}" alignment-baseline="center" text-anchor="start">
          ${text}
        </text>
      </svg>
    `;
  }
  