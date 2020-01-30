function browsefy ({ userAgent } = {}) {
  const result = {
    browser: '', // Internet Explorer
    os: '', // Windows
    platform: '', // desktop
    model: '' // iPhone
  }

  let ua = ''

  if (userAgent) {
    ua = userAgent.toLowerCase()
  } else {
    if (typeof window === 'undefined') {
      // If it is server-side rendering, fall back with console warning.
      return console.warn('browsefy can not work on server-side!')
    } else {
      ua = userAgent || window.navigator.userAgent.toLowerCase()
    }
  }

  if (ua.indexOf('macintosh') > -1) {
    result.os = 'macOS'
    result.platform = 'desktop'
  } else if (ua.indexOf('windows phone') > -1) {
    result.os = 'Windows Phone'
    result.platform = 'mobile'
  } else if (ua.indexOf('xbox') > -1) {
    result.browser = 'Microsoft Edge'
    result.os = 'Windows'
    result.model = 'XBox'
    result.platform = 'console'
    console.log('result:', result)
    return result
  } else if (ua.indexOf('windows') > -1) {
    result.os = 'Windows'
    result.platform = 'desktop'
  } else if (ua.indexOf('ipad') > -1) {
    result.os = 'iOS'
    result.model = 'iPad'
    result.platform = 'tablet'
  } else if (ua.indexOf('iphone') > -1) {
    result.os = 'iOS'
    result.model = 'iPhone'
    result.platform = 'mobile'
  } else if (ua.indexOf('android') > -1) {
    result.os = 'Android'
    result.platform = 'mobile'
    if (ua.indexOf('mobile') > -1) {
      result.platform = 'mobile'
    } else if (ua.indexOf('tablet') > -1 || ua.indexOf('nexus') > -1) {
      result.platform = 'tablet'
    }
  } else if (ua.indexOf('cros') > -1) {
    result.os = 'Chrome OS'
  } else if (ua.indexOf('blackberry') > -1 || ua.indexOf('bb') > -1 || ua.indexOf('playbook') > -1) {
    result.browser = 'BlackBerry'
    result.os = 'BlackBerry'
    result.platform = ua.indexOf('playbook') < 0 ? 'mobile' : 'tablet'
    console.log('result:', result)
    return result
  } else if (ua.indexOf('playstation') > -1) {
    result.browser = 'PS Web Browser'
    result.model = 'PlayStation'
    result.platform = 'console'
    console.log('result:', result)
    return result
  }

  if (ua.indexOf('edg') > -1) {
    result.browser = 'Microsoft Edge'
  } else if (ua.indexOf('ucbrowser') > -1) {
    result.browser = 'UC Browser'
  } else if (ua.indexOf('googlebot') > -1) {
    result.browser = 'Googlebot'
    result.platform = 'bot'
    console.log('result:', result)
    return result
  } else if (ua.indexOf('fxios') > -1 || ua.indexOf('firefox') > -1) {
    result.browser = 'Firefox'
  } else if (ua.indexOf('msie') > -1 || ua.indexOf('rv:') > -1) {
    result.browser = 'Internet Explorer'
  } else if (ua.indexOf('opera') > -1 || ua.indexOf('opr') > -1) {
    result.browser = 'Opera'
  } else if (ua.indexOf('chrome') > -1 || ua.indexOf('crios') > -1) {
    result.browser = 'Chrome'
  } else if (result.os !== 'Android' && ua.indexOf('safari') > -1) {
    result.browser = 'Safari'
  } else if (ua.indexOf('instagram') > -1) {
    result.browser = 'Instagram'
  } else if (ua.indexOf('pinterest') > -1) {
    result.browser = 'Pinterest'
  } else if ((ua.indexOf('fban') > -1 || ua.indexOf('fbav') > -1) && ua.indexOf('messenger') < 0 && ua.indexOf('fb_iab') < 0) {
    result.browser = 'Facebook'
  } else if ((ua.indexOf('messenger') > -1 || ua.indexOf('fb_iab') > -1) && (ua.indexOf('fban') < 0 || ua.indexOf('fbav') < 0)) {
    result.browser = 'Facebook Messenger'
  } else if (ua.indexOf('en-us') > -1) {
    result.browser = 'Android Browser'
  }

  console.log('result:', result)
  return result
}

export default browsefy
