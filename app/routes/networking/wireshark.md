By selecting a segment in the packet byes panel, a section of the packet details will be selected, and underneath it will show the field which can be used in a display filter. Fields in the packet details that are wrapped in `[]` represent artificial fields populated by Wireshark and are not part of the packet bytes

## smb_putty_xfer notes
network share on `192.168.47.132`

`192.168.47.132 (01)` --> `.exe` --> `192.168.47.133 (02)`
- note that there's a `Create AndX Request` from `02` and a `Create AndX Response` from `01`. This is `02` attempting to open the file and `01` responding with a success

## Follow Protocol Stream

With this tool, you can see the packets from the application POV. Recall that applications deal with headers. 

## Statistics -> Service Response Time -> SMB

The `SRT` columns have the same values as those in the `Delta Time Display` column

## Statistics -> Graph I/O

If you hover over the specific axis and zoom, it wont zoom in on the other axis.

# Packet Details
Wireshark will divide portions of the packet based on the OSI model, e.g.,
Frame                   Layer 1 (Physical)
Ethernet II             Layer 2 (Datalink)
IPv4                    Layer 3 (Network)
TCP                     Layer 4 (Transport)
TLS                     Layer 6 (Presentation)