# Relayer-Server

## /token

Method: 
- POST : 
    -   Body : 
        ```json
        {
            ciphertext : "asjbfuqwbfjwbfuewgawbnalifhoiklwehuiewqw9qw+68468wr323ef4346t7ew4sdfe"
        }
        ```
    -   Response : 
        ```json
        {
            hash : "0x6c3bf3dccc39df78b946f2d49077e90fc88a90c7c3f06ab17244a9850d3dc85b"
        }
        ```
        
- GET : 
    - Query:
        ```json
        hash
        ```
        `url/token?hash=0x6c3bf3dccc39df78b946f2d49077e90fc88a90c7c3f06ab17244a9850d3dc85b`
    -   Response : 
        ```json
        {
            ciphertext : "asjbfuqwbfjwbfuewgawbnalifhoiklwehuiewqw9qw+68468wr323ef4346t7ew4sdfe"
        }
        ```
    
    