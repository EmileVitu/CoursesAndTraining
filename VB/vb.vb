'Excel

'----------------------------------------------------------------------------------

'Module 0

'Excel Formulas
'https://fr.excelfunctions.eu/

'----------------------------------------------------------------------------------

' Module 1 - Setup

'https://www.youtube.com/watch?v=f42OniDWaIo

'Mises en places d'options : 
'Options -->Personaliser le ruban --> Developeur
'Options --> Save as : Excel Macro-Enabled Workbook

'Visual Basic Tab :

'Projects on the top left
'Properties on the bottom left

'--> Insert > Module
'Un nouveau module s'est ajouté. 
' -->
'Option Explicit

'Sub Hello_Emile()

'MsgBox "Hello Emile!", 0, "Welcome box"

'End Sub

'--> Developpeur > Insert > Button > hold alt key and click on a cell
'Alt --> renders it more tidy
'Then select the macro you want to uses

'----------------------------------------------------------------------------------

'Module 2 - Range

'https://www.youtube.com/watch?v=XChBaEcd_VE

'----------------------------------------------------------------------------------

'Module 3 - Storing stuff in variales

'https://www.youtube.com/watch?v=aMV9HZU8hAM
' Option Explicit is here to avoid spelling errors

'----------------------------------------------------------------------------------

'Module 4 - Position Control

'https://www.youtube.com/watch?v=0VzA5d1JrlE

' --> It is the Offset that helps on the position. =OFFSET(CELL;NBROWS;NBCOLUMNS)
' Anchorpoint
' Number of rows down
' Number of column across

'First we do it on excel
'We use the Randbetween(x;y) formulae to create random numbers
'To reboot the formulae and find a new random number, just press f9
'f9 = small calculette number on the full top right of the formulas tab
'We copy paste as values ctrl+c, then ctrl+alt+v (coller spécial) et on colle les values

' ALT+H+B+A = all borders on selected cells
' ALT+H+E+A = clears all the formating of the selected cells

'----------------------------------------------------------------------------------

'Module 5 - For Next Loops

'https://www.youtube.com/watch?v=5xeHwbsjXeI

' F8 or Debug > Step by Step = highlight each moment of the code

' Sub List_To_Ten()

' Dim Counter As Integer

' Counter = 10

' For Counter = 1 To 10

' Range("L20") = Counter

' Next Counter

' End Sub

'So here, Counter = 1, then 2, then 3 ... until 10.
'We can see it when using the debug or F8. 
'Now to have a created list. 

' Range("L20").Offset(Counter, 0) = Counter

'----------------------------------------------------------------------------------

'Module 6 - Conditional satements

'https://www.youtube.com/watch?v=bOw69Quz8jE

'This is tje formula for the excel spreadsheat : =IF(B35>40;"Pass";"Fail")
'Then in VBA : 

'Option Explicit

'Sub Input_Pass()

'Dim Counter As Integer

'For Counter = 1 To 10
'    If Range("B35").Offset(Counter, 0) > Range("C33") Then
'        Range("D35").Offset(Counter, 0) = "Pass"
'        Else
'        Range("D35").Offset(Counter, 0) = "Fail"
'    End If
'Next Counter

'End Sub

'----------------------------------------------------------------------------------

'Module 7 - Sources of code

'https://www.youtube.com/watch?v=fgmb3MfGY7Y

'Organic coding (my code)
'Recycled code (from another excel file or from online sources)
'Generated code (while recording with the macro recorder)

'After recording our Macro, we can find it as the last module in the developper mode
'We can also insert a button and assign it to the selected new macro

'ALT + H + E + F = clear selected cells format

'----------------------------------------------------------------------------------

'Module 8 - Concept of collection : For Each Loops

'3 types of loop : For Next Loop, For Each & Do Until

'We are going to try to loop in all the sheets
'When working on VBA and starting to type a variable name already existing,
'You can call it directly with : CTRL + SPACE
'Here are two Fonctions that lists the sheets, then the shapes of the workbook

' Option Explicit

' Sub Do_Something_To_All_Shapes()

' Dim Emile_Sheet As Worksheet
' Dim Positioner As Integer
' Dim Emile_Shape As Shape

' Positioner = 0

' For Each Emile_Shape In Sheets("Feuil1").Shapes
   
'     Sheets("Feuil1").Range("C62").Offset(Positioner, 0) = Emile_Shape.Name
'     ' MsgBox Emile_Sheet.Name
    
'     Positioner = Positioner + 1
    
' Next Emile_Shape

' End Sub



' Sub Do_Something_To_All_Sheets()

' Dim Emile_Sheet As Worksheet
' Dim Positioner As Integer
' For Each Emile_Sheet In Worksheets

'     Sheets("Feuil1").Range("B62").Offset(Positioner, 0) = Emile_Sheet.Name
'     MsgBox Emile_Sheet.Name

'     Positioner = Positioner + 1

' Next Emile_Sheet

' End Sub

'----------------------------------------------------------------------------------

'Module 9 - The Do Until Loops

'The interest of this loop is that we can choose the exit condition

' Option Explicit

' Sub Do_Until_Example()

' Dim EmileCounter As Integer
' EmileCounter = 1

' Do Until EmileCounter = 10

' MsgBox EmileCounter
' EmileCounter = EmileCounter + 1

' Loop

' End Sub

'Another example using cells instead of message boxes. 

' Sub Do_Until_Example()

' Dim EmileCounter As Integer
' EmileCounter = 1

' Do Until EmileCounter > 10

' 'MsgBox EmileCounter

' Range("B80").Offset(EmileCounter, 0) = EmileCounter

' EmileCounter = EmileCounter + 1

' Loop

' End Sub

'One last example using the exit condition of the loop in the middle of the code
'Using "Exit Do"

' Sub Do_Until_Example()

' Range("F81:F200").ClearContents

' Dim EmileCounter As Integer
' EmileCounter = 1

' Do

' 'MsgBox EmileCounter

' Range("F80").Offset(EmileCounter, 0) = Range("D81")

' If Range("D82") > 50 Then Exit Do

' EmileCounter = EmileCounter + 1

' Loop

' MsgBox "Maximum value reached in " & EmileCounter & " numbers"

' End Sub

'----------------------------------------------------------------------------------

'Module 10 : Applications

'Recreation of a trafic light
'To select objects we can go to : 
'home > find and select > select multiple objects with the mouse
'To reorder multiple shapes properly, select all of them with ctrl or the above, then :
' Shape format > arrange > distribute horizontally or vertically

'Working witth shapes :

' Option Explicit
' Sub Move_Right()
'     ActiveSheet.Shapes("Oval 1").Left = ActiveSheet.Shapes("Oval 1").Left + 10
' End Sub
' Sub Move_Left()
'     ActiveSheet.Shapes("Oval 1").Left = ActiveSheet.Shapes("Oval 1").Left - 10
' End Sub
' Sub Make_Wider()
'     ActiveSheet.Shapes("Oval 1").Width = ActiveSheet.Shapes("Oval 1").Width + 10
' End Sub
' Sub Make_Narrower()
'     ActiveSheet.Shapes("Oval 1").Width = ActiveSheet.Shapes("Oval 1").Width - 10
' End Sub

'----------------------------------------------------------------------------------

'Module 11 : 

'We are going to use states in annotations to create pseudo code
'F2 = Cell editing mode

' Option Explicit

' Sub Trafic_Lights()

' 'Incrementation of the state
' Range("I16") = Range("I16") + 1
' If Range("I16") > 4 Then Range("I16") = 1

' 'Identify the current state and colour with appropriate colour
' Select Case Range("I16")
'     Case 1
'         MsgBox "This is case 1"
'     Case 2
'         MsgBox "This is case 2"
'     Case 3
'         MsgBox "This is case 3"
'     Case 4
'         MsgBox "This is case 4"
' End Select

' End Sub

'We can also use "Case Else" when none other case is appliable

'----------------------------------------------------------------------------------

'Module 12 : 

'ALT+F11 : open VBA editor

' Sub Trafic_Lights()

' Range("I16") = Range("I16") + 1
' If Range("I16") > 4 Then Range("I16") = 1

' Select Case Range("I16")
'     Case 1
'         ActiveSheet.Shapes("Light 1").Fill.ForeColor.RGB = vbRed
'         ActiveSheet.Shapes("Light 2").Fill.ForeColor.RGB = vbWhite
'         ActiveSheet.Shapes("Light 3").Fill.ForeColor.RGB = vbWhite
'     Case 2
'         ActiveSheet.Shapes("Light 1").Fill.ForeColor.RGB = vbRed
'         ActiveSheet.Shapes("Light 2").Fill.ForeColor.RGB = vbYellow
'         ActiveSheet.Shapes("Light 3").Fill.ForeColor.RGB = vbWhite
'     Case 3
'         ActiveSheet.Shapes("Light 1").Fill.ForeColor.RGB = vbWhite
'         ActiveSheet.Shapes("Light 2").Fill.ForeColor.RGB = vbWhite
'         ActiveSheet.Shapes("Light 3").Fill.ForeColor.RGB = vbGreen
'     Case 4
'         ActiveSheet.Shapes("Light 1").Fill.ForeColor.RGB = vbWhite
'         ActiveSheet.Shapes("Light 2").Fill.ForeColor.RGB = vbYellow
'         ActiveSheet.Shapes("Light 3").Fill.ForeColor.RGB = vbWhite
' End Select

' End Sub

'Now if we want to hide the state and keep it away from the spreadsheet : 
'By implementaing a variable !

'----------------------------------------------------------------------------------

'Module 13 : 

'Now if we want to hide the state and keep it away from the spreadsheet : 
'By implementaing a variable !

'We have an issue, the value of the variable is reset each time the routine restarts

'Now we will build a dropdown menu with the 4 different state values
'ALT + A + V + V --> list, select data on spreadsheet --> creates a dropdown menu with the selected data
'Use TAB when a formula is selected when typing the beginning of one in a cell
'VLOOKUP() = RECHERCHEV()

'----------------------------------------------------------------------------------

'Module 14 : Application.Worksheet Functions

' "_" in the middle of a line of code allows us to go to the next line without braking the code
' --> the editor understands it as if the two lines of code are still one line

' ActiveSheet.Shapes("Light 1").Fill.ForeColor.RGB = _
' application.WorksheetFunction.VLookup(State_No.Range,("C20:F20"),2,0)

'By selecting one or multiple cells, you can name it and then call it
'Formulas > Name Manager : Lists all the shapes or cells that have been named


' Sub Trafic_Lights()

' State_No = State_No + 1
' If State_No > 4 Then State_No = 1

' Range("Cell_Light_1").Interior.ColorIndex = _
' Application.WorksheetFunction.VLookup(State_No, Range("D2:G6"), 2, 0)

' Range("Cell_Light_2").Interior.ColorIndex = _
' Application.WorksheetFunction.VLookup(State_No, Range("D2:G6"), 3, 0)

' Range("Cell_Light_3").Interior.ColorIndex = _
' Application.WorksheetFunction.VLookup(State_No, Range("D2:G6"), 4, 0)

' End Sub

' --> That way we can access a worksheet function (rechercheV) inside our vba

'Workbook structure

'We separate the data from our lights

' Range("Cell_Light_1").Interior.ColorIndex = _
' Application.WorksheetFunction.VLookup(State_No, Sheets("Store").Range("L_Table"), 2, 0)

'ALT+W+V+G = Remove background gridlines

'----------------------------------------------------------------------------------

'Module 16 : Planning and Conceptualisation

' We're answering a request from someone. 
' Now we are going to create sudo code --> talking trough our task. 

' We create a news module, then checl if we have empty rows in our data that could brake our code

' ALT+A+T on a selection = filter. 
' Like that we can check the quality of the data. 
' If the data has got bad quality, we can cleanse it. 

' Dynamic solutions are good for evolutive data. 

'----------------------------------------------------------------------------------

'Module 17 : Begining of the building (first two lines)

' Defining a dynamic Range : Range(Range(start), Range(end, point))
' --> Range("D4:D503").Select : This would be a static solution

' ALT+H+D+R : Delet this row

' Finally we have the following : 

' Dim End_Row As Long
' End_Row = Range("D" & Rows.Count).End(xlUp).Row

' Range(Range("D4"), Range("D" & End_Row)).Select
' MsgBox End_Row

'----------------------------------------------------------------------------------

'Module 18 : Looping through the range and creating individual sheets

' Clicking on the left of the code in the gray column creates a brakepoint
' Whe the code is played, it stops automatically at the brakepoint

' ALT+O+H+R : Rename Sheet
' ALT+H+DS+S : Delete Sheet

' Dim Counter As Long
' Dim Target_Sheet As String
' Dim Emile_Sheet As Worksheet
' Dim Sheet_Found As Boolean

' For Counter = 4 To End_Row

'     Target_Sheet = Sheets("Data").Range("D" & Counter)
    
'     Sheet_Found = False 'We initialise the variable
    
'     For Each Emile_Sheet In ThisWorkbook.Sheets
    
'         If Emile_Sheet.Name = Target_Sheet Then Sheet_Found = True
    
'     Next Emile_Sheet

' Next Counter

'----------------------------------------------------------------------------------

'Module 19 : Creating the category sheets

' Sub Create_Category_Sheets()

' Dim Counter As Long
' Dim Target_Sheet As String
' Dim Emile_Sheet As Worksheet
' Dim Sheet_Found As Boolean
' Dim End_Row As Long

' End_Row = Sheets("Data").Range("D" & Rows.Count).End(xlUp).Row

' For Counter = 4 To End_Row

'     Target_Sheet = Sheets("Data").Range("D" & Counter)
    
'     Sheet_Found = False 

'     For Each Emile_Sheet In ThisWorkbook.Sheets
    
'         If Emile_Sheet.Name = Target_Sheet Then Sheet_Found = True
    
'     Next Emile_Sheet
        
'     If Sheet_Found = False Then
'         Sheets.Add After:=Sheets(Sheets.Count)
'         ActiveSheet.Name = "Target_Sheet"
'     End If

' Next Counter

'----------------------------------------------------------------------------------

'Module 20 : Deleting the sheets

'Other than the sheets name, we could use the sheets index numbers

' Sub Delete_Sheets()

' Dim Emile_Sheet As Worksheet

' Application.DisplayAlerts = False

' For Each Emile_Sheet In ThisWorkbook.Sheets

' 'To test :
' 'MsgBox Emile_Sheet.Name

' If Emile_Sheet.Name <> "Data" And _
'     Emile_Sheet.Name <> "Module 1-10" And _
'     Emile_Sheet.Name <> "Module 10-14" And _
'     Emile_Sheet.Name <> "Module 15 Lights" And _
'     Emile_Sheet.Name <> "Module 15 - Store" Then Emile_Sheet.Delete

' Next Emile_Sheet

' Application.DisplayAlerts = False

' End Sub

'Lastly we add two lines at the end of the "create" Macro to focus on the data sheet
' Sheets("Data").Select

'And to inform the user the job is done
' MsgBox "Analysis Complete", 0, "Done"

'----------------------------------------------------------------------------------

'Module 21 : Adding the Data to the created sheets

'COUNTA formula : Counts the number of values in a range of cells
'COUNTIF formula : Counts the number of occurences in a range of cells

'----------------------------------------------------------------------------------

'Module 22 : Transfering the data

' xlPasteFormula
' xlPasteFormat
' xlPasteValues

' Application.ScreenUpdating  = False
' This cuts the screen updating of excel
' Application.ScreenUpdating  = True
' Don't forget to set it back to true at the end of the routine

'----------------------------------------------------------------------------------

'Module 23 : Alterenative approaches

'In case we have a lot more data, we should think about alternative and faster approaches. 

'A- First approach
'Instead of doing a copy paste, which takes a long time, we're going to do A = B. 

' Sub Test_Direct()

' 'a = b
' Tange("A1") = Range("B1")

' End Sub

    ' With Sheets("Data")
    '     Sheets(Target_Sheet).Range(Target_Range).Value = _
    '     .Range(.Range("B" & Counter), .Range("E" & Counter)).Value
    ' End With

'ALT + A + T = Cmlear the filters on the sheet

'B- Second approach
'First sorting the data per category and then copy pasting big chunks of it per category

'ALT + A + S + S = sort the selected range
'Using the record macor and sorting, we can obtain the code for sorting in vba

'----------------------------------------------------------------------------------

'Module 24 : Dynamically selecting the data using .Cells

'Last building block : the cell referencing technique

'Sheets("Data").Cells(1, 1).Select
'Sheets("Data").Cells(Rows.Count, 1).Select
'Sheets("Data").Cells(Rows.Count, Columns.Count).Select
'Sheets("Data").Cells(Range("A1"), 1).Select

    ' With Sheets("Data")

    '     .Range(.Cells(1, 1), .Cells(10, 1)).Select
        
    ' End With

' 'Now to make the whole data set dynamically selected

    ' Sub Sort_Test()

    ' Dim Data_Range As String 'dimensions for whole dataset
    ' Dim Sort_Range As String 'dimensions for sort column

    ' Dim End_Row As Long 'store last row in dataset
    ' Dim End_Column As Long 'store last column in dataset

    ' 'use .cekks ti defube the last row of the dataset
    ' With Sheets("Data")
    '     'taking a solution that would take care of an empty row so from the bottom to the top
    '     End_Row = .Cells(Rows.Count, 2).End(xlUp).Row
    '     'selecting the row of the cellgoing from the last up
    '     End_Column = .Cells(3, Columns.Count).End(xlToLeft).Column
    '     Data_Range = .Range(.Cells(4, 2), .Cells(End_Row, End_Column)).Address
    ' End With

'----------------------------------------------------------------------------------

'Module 25 : 


'----------------------------------------------------------------------------------

'Module 26 : Formatting

'ALT+H+O+E : Opens cell format window. 
'ALT+W+V+G : Switch On/Off the background gridlines. 
'ALT+H+E+F : Delete all formatting on the selection. 
'ALT+H+B+A : Adds all of the borders on the selection.

'----------------------------------------------------------------------------------

'Module 27 : 

'----------------------------------------------------------------------------------

'Module 28 : 

'Application.StatusBar = message en bas ) sgauche d'excel (calcul, 30%, 70%...)
'Utile pour ajouter des commentaires ou une progress bar

'----------------------------------------------------------------------------------

'Module 29 : 

'----------------------------------------------------------------------------------

'Module 30 : 

'In excel : =value; =Emile_Function dans le tableau !
'ALT+A+V+V = Data Validation

'----------------------------------------------------------------------------------

'Module 31 : Arrays

' Option Explicit

' Sub FixedSizedArray()
'     Dim TopThreeFilms(2) As String
' End Sub

' --> Creates an array with 3 containers (0, 1, 2)

' Option Explicit
'Option Base 1

' Sub FixedSizedArray()
'     Dim TopThreeFilms(3) As String
' End Sub