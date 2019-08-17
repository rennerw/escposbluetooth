# escposbluetooth
 ### Studying native web blueetooth API that uses HTTPS port to run for printing an esc/pos printer 58mm.

## Coisas importantes
O servidor **DEVE** ser HTTPS <br>
O **serviço** e a **caracteristica** da sua impressora bluetooth podem não ser _000018f0-0000-1000-8000-00805f9b34fb_ e _00002af1-0000-1000-8000-00805f9b34fb_
então tente encontra-las em [Bluetooth Chrome](chrome://bluetooth-internals/#devices), o UUID de uma caracteristica que pode **escrever (write)** terá um input e essa será a caracteristica correta da sua bluetooth printer <br>
