fx_version "cerulean"
game "gta5"

author "Zhincore <adam@zhincore.eu>"
description "Minigames"
version "1.0.0"

if GetConvar("dev_mode", false) then
  ui_page "http://127.0.0.1:3000/"
else
  ui_page "dist/nui/index.html"
end

files {
  "dist/nui/*"
}

client_scripts {
  "dist/client/client.js"
}
