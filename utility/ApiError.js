class ApiError extends Error
{  constructor
    (
        statuscode,
        message,
        description,
        errors=[]
    )
    {
        super(message, statuscode, description),
        this.message=message,
        this.statuscode=statuscode,
        this.errors=errors,
        this.success=false,
        this.data= description   
    }
}

export {ApiError}