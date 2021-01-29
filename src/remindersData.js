let TSAchannel = '747602050535129089'
let CCchannel = '760600950527492116'
let MPchannel = '760600819799425042'
let EBchannel = '732030332718678076'
let BDchannel = '768537151134367798'

let TSA_Memberrole = "<@&749026148171644980>"
let TSA_CCrole = "<@&751679784756707348>"
let TSA_Officerrole = "<@&749025182139547679>"
let TSA_MProle = "<@&751680164022321155>"
let TSA_EDrole = "<@&776637375220285451>"
let TSA_EBrole = "<@&751680093696294932>"
let TSA_BDrole = "<@&776662542826078208>"
let BD_role = "<@&768543627227037697>"
let CC_role = "<@&804505144431476747>"
let EB_role = "<@&709140394209705994> <@&714008184024465412>"
let MP_role = "<@&767858026601381948"

export let reminders = [
    //Monday Reminders: Music Production Club -> TSA and MP channel
    {dayOfWeek: 1, hour: 10, minute: 0, channelID: TSAchannel, message: `${TSA_MProle} Just a friendly reminder that there's a Music Production meeting today from 3:30 - 5pm`},
    {hour: 15, minute: 0, message: `${TSA_MProle} Music Production meeting starts in 30 minutes.`},
    {minute: 25, message: `${TSA_MProle} Music Production meeting starts in 5 minutes.`},

    {hour: 10, minute: 0, channelID: MPchannel, message: `${MP_role} Just a friendly reminder that there's a Music Production meeting today from 3:30 - 5pm`},
    {hour: 15, message: `${MP_role} Music Production meeting starts in 30 minutes.`},
    {minute: 25, message: `${MP_role} Music Production meeting starts in 5 minutes.`},

    //Tuesday Reminders: TSA Officer Meeting -> TSA channel
    {dayOfWeek: 2, hour: 10, minute: 0, channelID: TSAchannel, message: `${TSA_Officerrole} Just a friendly reminder that there's a TSA Officer meeting today from 3:30 - 4:30pm`},
    {hour: 15, minute: 0, message: `${TSA_Officerrole} TSA Officer meeting starts in 30 minutes.`},
    {minute: 25, message: `${TSA_Offierrole} TSA Officer meeting starts in 5 minutes.`},

    //Wednesday Reminders: Engineering Brightness -> TSA and EB channel
    {dayOfWeek: 3, hour: 10, minute: 0, channelID: TSAchannel, message: `${TSA_EBrole} Just a friendly reminder that there's a Engineering Brightness meeting today from 2:45 - 4:45pm`},
    {hour: 14, minute: 15, message: `${TSA_EBrole} Engineering Brightness meeting starts in 30 minutes.`},
    {minute: 45, message: `${TSA_EBrole} Engineering Brightness meeting starts in 5 minutes.`},

    {hour: 10, minute: 0, channelID: EBchannel, message: `${EB_role} Just a friendly reminder that there's a Engineering Brightness meeting today from 3:30 - 5pm`},
    {hour: 14, minute: 15, message: `${EB_role} Engineering Brightness meeting starts in 30 minutes.`},
    {minute: 45, message: `${EB_role} Engineering Brightness meeting starts in 5 minutes.`},

    {hour: 10, minute: 0, channelID: TSAchannel, message: `${TSA_BDrole} Just a friendly reminder that there's a Biotechnology Design meeting today from 3:30 - 4:30pm`},
    {hour: 15, message: `${TSA_BDrole} Biotechnology Design meeting starts in 30 minutes.`},
    {minute: 25, message: `${TSA_BDrole} Biotechnology meeting starts in 5 minutes.`},

    {hour: 10, minute: 0, channelID: BDchannel, message: `${BD_role} Just a friendly reminder that there's a Biotechnology Design meeting today from 3:30 - 4:30pm`},
    {hour: 15, message: `${BD_role} Biotechnology Design meeting starts in 30 minutes.`},
    {minute: 25, message: `${BD_role} Biotechnology Design meeting starts in 5 minutes.`},

    //Thursday Reminders: Coding Club -> TSA and CC channel
    {dayOfWeek: 4, hour: 10, minute: 0, channelID: TSAchannel, message: `${TSA_CCrole} Just a friendly reminder that there's a Coding Club meeting today from 3:30-5pm`},
    {hour: 15, minute: 0, message: `${TSA_CCrole} Coding Club meeting starts in 30 minutes.`},
    {minute: 25, message: `${TSA_CCrole} Coding Club meeting starts in 5 minutes.`},

    {hour: 10, minute: 0, channelID: CCchannel, message: `${CC_role} Just a friendly reminder that there's a Coding Club meeting today from 3:30 - 5pm`},
    {hour: 15, message: `${CC_role} Coding Club meeting starts in 30 minutes.`},
    {minute: 25, message: `${CC_role} Coding Club meeting starts in 5 minutes.`},

    //Friday Reminders: TSA and Engineering Design -> TSA channel
    {dayOfWeek: 5, hour: 10, minute: 0, channelID: TSAchannel, message: `${TSA_Memberrole} Just a friendly reminder that there's a TSA meeting today from 3:00-4pm`},
    {message: `${ED_role} Just a friendly reminder that there's an Engineering Design meeting today from 4 - 5pm`},
    {hour: 14, minute: 30, message: `${TSA_Memberrole} TSA meeting starts in 30 minutes.`},
    {minute: 55, message: `${TSA_Memberrole} TSA meeting starts in 5minutes.`},
    {hour: 15, minute: 30, message: `${TSA_EDrole} Engineering Design meeting starts in 5 minutes.`},
    {minute: 55, message: `${TSA_EDrole} Engineering Design meeting starts in 5 minutes.`},

]