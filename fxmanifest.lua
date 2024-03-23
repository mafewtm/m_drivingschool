fx_version 'cerulean'
game 'gta5'

author 'mafewtm'
name 'm_drivingschool'
description 'A driving school resource'
repository 'https://github.com/mafewtm/m_drivingschool'
version '1.0.0'

ox_lib 'locale'

shared_script '@ox_lib/init.lua'

client_script 'client/main.lua'

server_script 'server/main.lua'

ui_page 'web/build/index.html'

files {
    'config/client.lua',
    'config/shared.lua',
	'web/build/index.html',
	'web/build/**/*',
    'locales/*.json',
}

lua54 'yes'
use_experimental_fxv2_oal 'yes'